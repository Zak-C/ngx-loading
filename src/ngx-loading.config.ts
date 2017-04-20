export interface ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
}

export class LoadingConfig implements ILoadingConfig {
    backdropBorderRadius?: string;
    backdropBackgroundColour?: string;
    animationType?: string;
    primaryColour?: string;
    secondaryColour?: string;
}