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
        await bot.sendPhoto(chatId, "public/images/giraffe_logo.png", {
            caption: "How cool is your Telegram profile? Check your rating and receive rewards🦒",
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "Let's go",
                            web_app: {
                                url: "https://c71b91e5-2f60-469d-8361-b4938e1d056f-00-1zj7aqf1z6zeq.picard.replit.dev:3000/",
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