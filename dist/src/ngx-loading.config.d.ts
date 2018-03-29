export interface ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
}
export declare class LoadingConfig implements ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;
    constructor(config?: ILoadingConfig);
}
export declare const ANIMATION_TYPES: {
    chasingDots: string;
    circle: string;
    circleSwish: string;
    cubeGrid: string;
    doubleBounce: string;
    pulse: string;
    rectangleBounce: string;
    rotatingPlane: string;
    threeBounce: string;
    wanderingCubes: string;
};
