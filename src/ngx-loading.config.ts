export interface ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
}

export class LoadingConfig implements ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
    tertiaryColour?: string;
}

export const ANIMATION_TYPES = {
    threeBounce: 'three-bounce',
    rotatingPlane: 'rotating-plane',
    rectangleBounce: 'rectangle-bounce',
    wanderingCubes: 'wandering-cubes'
}