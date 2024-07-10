function getCookie(name) {
  if (!name) {
    console.log("You must enter a cookie name");
    return;
  } else if (typeof name !== "string") {
    console.log("Only string values are allowed");
    return;
  } else {
    var currentCookies = document.cookie;
    var seperatedVals = currentCookies
      .split("; ")
      .join()
      .split("=")
      .join()
      .split(",");
    for (var item = 0; item < seperatedVals.length; item += 2) {
      if (seperatedVals[item] === name) {
        return seperatedVals[item + 1];
      }
    }
    return 0;
  }
}

function setCookie(name, value, age) {
  if (!name || !value) {
    console.log("You must enter a name and a value");
    return;
  } else if (typeof name !== "string" || typeof value !== "string") {
    console.log("Only string values are allowed");
    return;
  } else {
    var newCookie = name + "=" + value + "; ";
    var currentCookies = document.cookie;
    if (currentCookies.includes(name)) {
      console.log("This cookie already exists and you are about to change it");
      if (age) {
        newCookie += "max-age=" + age + "; ";
      }
    }
  }
  document.cookie = newCookie;
}

function deleteCookie(name) {
  if (!name) {
    console.log("You must enter a cookie name");
    return;
  } else if (typeof name !== "string") {
    console.log("Only string values are allowed");
    return;
  } else {
    var currentCookies = document.cookie;
    var seperatedVals = currentCookies
      .split("; ")
      .join()
      .split("=")
      .join()
      .split(",");
    for (var item = 0; item < seperatedVals.length; item++) {
      if (seperatedVals[item] === name) {
        var age = "max-age=0";
        var deleted = seperatedVals[item] + "=" + "; " + age + "; ";
        document.cookie = deleted;
        return;
      } else if (!seperatedVals.includes(name)) {
        console.log("This cookie doesn't exist");
      }
    }
  }
}

function allCookieList() {
  var cookieList = {};
  var currentCookies = document.cookie;
  if (currentCookies.length === 0) {
    console.log("There are no cookies available on this page");
    return;
  } else {
    var seperatedVals = currentCookies
      .split("; ")
      .join()
      .split("=")
      .join()
      .split(",");

    for (var i = 0; i < seperatedVals.length; i += 2) {
      cookieList[seperatedVals[i]] = seperatedVals[i + 1];
    }

    console.log(cookieList);
  }
}

function hasCookie(name) {
  if (!name) {
    console.log("You must enter a cookie name");
    return;
  } else if (typeof name !== "string") {
    console.log("Only string values are allowed");
    return;
  } else {
    var currentCookies = document.cookie;
    var seperatedVals = currentCookies
      .split("; ")
      .join()
      .split("=")
      .join()
      .split(",");
    for (var item = 0; item < seperatedVals.length; item += 2) {
      if (seperatedVals[item] === name) {
        console.log("Yes!! we have this cookie");
        return;
      } else {
        console.log("No!! we don't have this cookie");
      }
    }
  }
}
