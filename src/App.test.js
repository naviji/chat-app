import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

import mockData from './mockData';

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}


describe('Chat Application Tests', () => {
  // Test Goal 1: Sending a message
  test('allows user to type and send a message which appears in the chat', async () => {
    const { user } = setup(<App />);
    const testMessage = 'This is a unique test message!';

    const messageInput = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button', { name: /send/i });

    await user.type(messageInput, testMessage);
    await user.click(sendButton);

    // Check if the message appears specifically within the message list
    // 1. Find the message list container using the data-testid
    const messageList = await screen.findByTestId('message-list');

    // 2. Use 'within' to find the text only inside this container
    const sentMessage = await within(messageList).findByText(testMessage);
    expect(sentMessage).toBeInTheDocument();

    // Check if the input field is cleared
    expect(messageInput).toHaveValue('');
  });

  // Test Goal 2: Selecting a different friend
  test('allows user to select a different friend and view their chat', async () => {
    const { user } = setup(<App />);

    const friend1Name = mockData.friends.find(f => f.id === 'friend1')?.name || "Friend 1";
    const friend2Name = mockData.friends.find(f => f.id === 'friend2')?.name || "Friend 2";
    const friend1LastMessage = mockData.friends[0].messages[mockData.friends[0].messages.length - 1].text;
    const friend2LastMessage = mockData.friends[1].messages[mockData.friends[1].messages.length - 1].text;

    // Verify the first friend's chat is displayed initially
    // Check header using the role and accessible name (aria-label)
    expect(screen.getByRole('banner', { name: friend1Name })).toBeInTheDocument();

    // Check one of their messages is visible within the message list
    const messageList = screen.getByTestId('message-list'); // Get message list container
    expect(within(messageList).getByText(friend1LastMessage)).toBeInTheDocument();
    expect(within(messageList).queryByText(friend2LastMessage)).not.toBeInTheDocument();


    const friend2ListItem = screen.getByText(friend2Name, { selector: '.friend-list-item span.friend-name' }); // More specific selector
    expect(friend2ListItem).toBeInTheDocument();
    await user.click(friend2ListItem);

    const friend2Header = await screen.findByRole('banner', { name: friend2Name });
    expect(friend2Header).toBeInTheDocument();

    const updatedMessageList = await screen.findByTestId('message-list');

    // Verify a message from the second friend is now visible within the list
    const friend2Message = await within(updatedMessageList).findByText(friend2LastMessage);
    expect(friend2Message).toBeInTheDocument();

    // Verify a message from the first friend is no longer visible within the list
    expect(within(updatedMessageList).queryByText(friend1LastMessage)).not.toBeInTheDocument();
  });
});