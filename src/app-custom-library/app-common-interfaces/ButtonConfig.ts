export interface ButtonConfig {
    buttonText: string;
    buttonTextSize: number;
    spaceRight?: number;
    spaceLeft?: number;
    initBGColour?: string;
    initBorderColor?: string;
    hoverBGColour?: string;
    hoverBorderColor?: string;
    initTextColour?: string;
    hoverTextColour?: string;
    isHoverOn?: boolean;
}

export interface CustomButtonConfig {
    buttonsGroup: Array<ButtonConfig>;
}