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

export class LoadingConfig implements ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    fullScreenBackdrop?: boolean;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
    [key: string]: string | boolean | undefined;

    constructor(config: ILoadingConfig = {}) {
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
}

export const ANIMATION_TYPES = {
    threeBounce: 'three-bounce',
    rotatingPlane: 'rotating-plane',
    rectangleBounce: 'rectangle-bounce',
    wanderingCubes: 'wandering-cubes',
    fadingCircle: 'fading-circle'
}