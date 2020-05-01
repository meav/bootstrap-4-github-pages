const browser = bowser.getParser(window.navigator.userAgent);

if (`desktop` === `${browser.getPlatformType()}`) {
 $('head').append('<link rel="stylesheet" type="text/css" href="bowser/scrollbar.css">');
}