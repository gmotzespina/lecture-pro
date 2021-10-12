// A basic example how you can use background scripts in your Chrome extension.
// More on: https://developer.chrome.com/docs/extensions/mv2/background_pages/.
declare global {
  interface Window {
    chrome?: any;
  }
}

window.chrome.runtime.onInstalled.addListener(() => {
  console.log(
    "'Create React Chrome Extension - TypeScript' installed/updated..."
  );
});

export default {};
