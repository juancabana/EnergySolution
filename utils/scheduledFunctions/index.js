import cron from 'node-cron'

export const dailyScheduledTasks = () => {
  // Schedule the task to run every day at 1:00 AM Bogota time
    const scheduledJobFunction = cron.schedule('0 1 * * *', () => {
        console.log("I'm executed on a schedule!");
      }, { timezone: 'America/Bogota' });  
    
      scheduledJobFunction.start();
}
export const weeklyScheduledTasks = () => {
// Schedule the task to run every week on Mondays at 1:00 AM Bogota time
cron.schedule('0 1 * * 1', () => {
  miFuncionProgramada();
}, { timezone: 'America/Bogota' });
}