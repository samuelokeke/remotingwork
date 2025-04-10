if ("Notification" in window) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const notification = new Notification("System updated", {
        body: "Welcome back!",
      });

      notification.addEventListener("close", () => {});

      notification.addEventListener("error", () => {});
    } else {
      console.log("Permission denied");
    }
  });
}

/** track event for when users leave the website */
document.addEventListener("visibilitychange", () => {
  let notification: Notification | undefined;
  const previous = new Date().getTime();

  if (document.visibilityState === "hidden") {
    setInterval(() => {
      const difference = Math.round((new Date().getTime() - previous) / 1000);

      notification = new Notification(`Don't stay away too long ${difference}`, {
        body: "Don't stay away too long",
      });
    }, 1000);
  } else {
    notification?.close();
  }
});

/** blinking document title */
function checkDocumentTitle(newTitle: string = "Get started soon") {
  const title = document.title;

  const interval = setInterval(() => {
    if (document.title === title) {
      document.title = newTitle;
    } else {
      document.title = title;
    }
  }, 1000);

  clearInterval(interval);
}

checkDocumentTitle();
