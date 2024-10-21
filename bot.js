const TelegramBot = require("node-telegram-bot-api");
const config = require("./config.json");

// Create a new bot instance
const bot = new TelegramBot(config.telegramToken, { polling: false });

// Function to start polling
const startPolling = () => {
    bot.startPolling();
    console.log("Started polling.");
};

// Stop polling function
const stopPolling = async() => {
    try {
        await bot.stopPolling();
        console.log("Stopped previous polling.");
    } catch (error) {
        console.error("Error stopping polling:", error);
    }
};

// Manage bot polling
const managePolling = async() => {
    await stopPolling(); // Stop any existing polling
    startPolling(); // Start a new polling
};

// Handle /start command
bot.onText(/\/start/, async(msg) => {
    const chatId = msg.chat.id;
    try {
        // Send the logo image first
        await bot.sendPhoto(chatId, "public/images/message_logo.png", {
            caption: "How cool is your Telegram profile? Check your rating and receive rewards🦒",
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "Let's go",
                            web_app: {
                                url: "https://9e8b3fce-edaa-454a-b848-82334fedd90d-00-2bn5gfiz4mkfe.kirk.replit.dev:3000/",
                            },
                        },
                        {
                            text: "Join Giraffes community",
                            url: "https://t.me/giraffe_community",
                        },
                    ],
                ],
            },
        });
    } catch (err) {
        console.error("Error sending message:", err);
    }
});

// Start the polling process
managePolling();

// Optional: Handle shutdown gracefully
process.on("SIGINT", async() => {
    console.log("Shutting down gracefully...");
    await stopPolling();
    process.exit();
});