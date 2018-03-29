import { Component, OnInit, Input } from "@angular/core";

import { LoadingConfigService } from "./ngx-loading.service";
import {
  ILoadingConfig,
  LoadingConfig,
  ANIMATION_TYPES
} from "./ngx-loading.config";

@Component({
  selector: "ngx-loading",
  templateUrl: "./ngx-loading.component.html"
})
export class LoadingComponent implements OnInit {
  @Input() show: boolean;
  @Input() config: ILoadingConfig = new LoadingConfig();

  public ANIMATION_TYPES = ANIMATION_TYPES;

  public loadingConfig: ILoadingConfig = {
    animationType: "",
    backdropBackgroundColour: "",
    backdropBorderRadius: "",
    fullScreenBackdrop: false,
    primaryColour: "",
    secondaryColour: "",
    tertiaryColour: ""
  };

  private defaultConfig: ILoadingConfig = {
    animationType: ANIMATION_TYPES.threeBounce,
    backdropBackgroundColour: "rgba(0, 0, 0, 0.3)",
    backdropBorderRadius: "0px",
    fullScreenBackdrop: false,
    primaryColour: "#ffffff",
    secondaryColour: "#ffffff",
    tertiaryColour: "#ffffff"
  };

  constructor(private loadingConfigService: LoadingConfigService) {}

  ngOnInit() {
    for (let option in this.defaultConfig) {
      if (typeof this.loadingConfig[option] == "boolean") {
        if (this.config[option] != null) {
          this.loadingConfig[option] = this.config[option];
          continue;
        }

        this.loadingConfig[option] =
          this.loadingConfigService.loadingConfig[option] != null
            ? this.loadingConfigService.loadingConfig[option]
            : this.defaultConfig[option];
      } else {
        if (this.config[option] != null) {
          this.loadingConfig[option] = this.config[option];
          continue;
        }

        this.loadingConfig[option] =
          this.loadingConfigService.loadingConfig[option] != null
            ? this.loadingConfigService.loadingConfig[option]
            : this.defaultConfig[option];
      }
    }
  }

  public getAnimationType(animationType: string): string {
    let animationTypeSet: string;
    switch (animationType) {
      case ANIMATION_TYPES.chasingDots:
        animationTypeSet = ANIMATION_TYPES.chasingDots;
        break;
      case ANIMATION_TYPES.circle:
        animationTypeSet = ANIMATION_TYPES.circle;
        break;
      case ANIMATION_TYPES.circleSwish:
        animationTypeSet = ANIMATION_TYPES.circleSwish;
        break;
      case ANIMATION_TYPES.cubeGrid:
        animationTypeSet = ANIMATION_TYPES.cubeGrid;
        break;
      case ANIMATION_TYPES.doubleBounce:
        animationTypeSet = ANIMATION_TYPES.doubleBounce;
        break;
      case ANIMATION_TYPES.pulse:
        animationTypeSet = ANIMATION_TYPES.pulse;
        break;
      case ANIMATION_TYPES.rectangleBounce:
        animationTypeSet = ANIMATION_TYPES.rectangleBounce;
        break;
      case ANIMATION_TYPES.rotatingPlane:
        animationTypeSet = ANIMATION_TYPES.rotatingPlane;
        break;
      case ANIMATION_TYPES.threeBounce:
        animationTypeSet = ANIMATION_TYPES.threeBounce;
        break;
      case ANIMATION_TYPES.wanderingCubes:
        animationTypeSet = ANIMATION_TYPES.wanderingCubes;
        break;
      default:
        animationTypeSet = ANIMATION_TYPES.threeBounce;
    }
    return animationTypeSet;
  }
}
