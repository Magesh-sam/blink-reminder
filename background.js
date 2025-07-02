chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("blinkReminder", {
      periodInMinutes: 5
    });
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "blinkReminder") {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icons//blink.png",
        title: "Blink Reminder",
        message: "Time to blink! Rest your eyes for a few seconds.",
        priority: 2
      });
    }
  });
  