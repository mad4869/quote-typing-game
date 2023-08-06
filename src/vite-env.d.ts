/// <reference types="vite/client" />

declare type Quote = {
    text: string,
    author: string
}

declare type GameState = {
    isStarted: boolean,
    countdown: number,
    targetText: string,
    targetIndex: number,
    playerInput: string,
    // isInputError: boolean,
    answeredCount: number
}

declare type Action = {
    type: string,
    payload?: unknown
}