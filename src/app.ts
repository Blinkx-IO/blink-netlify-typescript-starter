import {contentResponse} from "./types/blinktypes";

let blinkData: contentResponse;
const netlifyApiUrl = (contentId: string, type: string): string =>
    `/.netlify/functions/blinkcontent?id=${contentId}&dataFilter=${type}`;

async function getBlinkData(url: string) {
    try {
        const response = await fetch(url, {
            method: "GET",
        });
        const result = await response.json();
        blinkData = result;
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function loadContent(contentId: string, type: string): Promise<void> {
    const blinkContentURL = netlifyApiUrl(contentId, type);
    const styleTag = document.createElement("style");
    const bodyTag = document.getElementById("wrapper") as HTMLElement;
    await getBlinkData(blinkContentURL);

    styleTag.innerText = blinkData.body.css;

    bodyTag.append(styleTag);

    const searchIndex = blinkData["body"]["html"].search("<script>");
    const innerScript = blinkData["body"]["html"].slice(
        searchIndex + 8,
        blinkData["body"]["html"].length - 9,
    );
    const newScript = document.createElement("script");
    newScript.append(innerScript);
    document.getElementById("canvas")!.innerHTML = blinkData["body"]["html"].slice(0, searchIndex);
    document.getElementById("canvas")!.append(newScript);
}

const blinkLoadContent = (id: string, type: string) => loadContent(id, type);

declare global {
    interface Window {
        blinkLoadContent: any;
    }
}
window.blinkLoadContent = blinkLoadContent;
export {blinkLoadContent};
