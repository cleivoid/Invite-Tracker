module.exports = {
    prefix: "iv.", // The prefix of the bot
    welcomeChannel: "831027601958895616", // The channel ID of where join and leave messages should be sent
    slashCommands: true, // Wether or not the bot should have slash commands
    colors: {
        main: [0, 110, 255],
        error: [231, 76, 60]
    },
    botstatus: {
        enabled: true, // Wether or not the bot should have a status
        status: "dnd", // The status of the bot (dnd, online, idle, invisible)
        activity_type: "STREAMING", // The type of the activity (watching, listening, playing, streaming)
        activity_text: "Pornhub", // The activity text
        activity_url: "https://pornhub.com" // The stream URL
    },
    inviteRewards: false, // Wether or not invite rewards should be enabled
    rewards: [
        {
            invitesNeeded: 5, // The amount of invites they should have
            roleID: "" // The role ID for the role they should get (DONT USE THIS SYSTEM AS DISCORD DOES NOT ALLOWS IT NOW.)
        }, //(DONT USE THIS SYSTEM AS DISCORD DOES NOT ALLOWS IT NOW.)
        {
            invitesNeeded: 10,
            roleID: ""
        }
    ],
    welcomeMessage: "{member} joined the server. This user was invited by **{inviter}** (who now has {invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {code} for the invite used, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
    leaveMessage: "{member} left the server. This user was invited by **${inviter}** (who now has ${invites} invites).", // Use {inviter} for who invited the member, {member} for the member, {mention} to mention the inviter, {ID} for the ID of the member, {inviterID} for the inviter's ID, and {invites} for the inviter's invites
}
