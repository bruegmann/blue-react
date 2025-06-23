export type breakOption = "sm" | "md" | "lg" | "xl"
export type ModalType = "ask" | "tell" | "verify"

export type StatusType =
    | null
    | "loading"
    | "success"
    | "info"
    | "warning"
    | "danger"
export interface StatusAlert {
    title?: string
    alertClassName?: string
    close?: boolean
    detailText?: string
    status?: StatusType
}

interface Phrases {
    [key: string]: string[]
}

const phrases: Phrases = {
    Cancel: ["Cancel", "Abbrechen"],
    Yes: ["Yes", "Ja"],
    No: ["No", "Nein"],
    Message: ["Message", "Nachricht"],
    "Toggle menu": ["Toggle menu", "Menü umschalten"],
    "Close all": ["Close all", "Alle schließen"],
    Error: ["Error", "Fehler"],
    Information: ["Information", "Information"],
    Search: ["Search", "Suche"]
}

export function getPhrase(
    keyword: string,
    countryCode: string | undefined = undefined,
    _phrases: Phrases | undefined = undefined
) {
    if (!countryCode) {
        if (typeof navigator !== "undefined" && navigator.language) {
            countryCode =
                navigator.language.toLowerCase().indexOf("de") > -1
                    ? "de-DE"
                    : "en-US"
        } else {
            countryCode = "en-US"
        }
    }
    _phrases = _phrases || phrases

    if (_phrases[keyword]) {
        if (countryCode.indexOf("de-") > -1) {
            return _phrases[keyword][1]
        } else {
            return _phrases[keyword][0]
        }
    } else {
        return keyword
    }
}
