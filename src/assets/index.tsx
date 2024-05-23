// illustration imports
import DotIllustration from './illustrations/dots-illustration.svg?react';
import UnionIllustration from './illustrations/union-illustration.svg?react';
import PolygonIllustration from './illustrations/polygon-illustration.svg?react';
import EllipseIllustration from './illustrations/ellipse-illustration.svg?react';
import RectangleIllustration from './illustrations/rectangle-illustration.svg?react';
import ControllerIllustration from './illustrations/controller-illustration.svg?react';

// logo imports
import PS5Logo from './logos/ps5-logo.svg?react';

// types
type ComponentType = React.FunctionComponent;

interface IllustrationTypes {
  Dot: ComponentType;
  Union: ComponentType;
  Polygon: ComponentType;
  Ellipse: ComponentType;
  Rectangle: ComponentType;
  Controller: ComponentType;
}

interface LogoTypes {
  PS5: ComponentType;
}

export const ILLUSTRATIONS: IllustrationTypes = {
  Dot: DotIllustration,
  Union: UnionIllustration,
  Polygon: PolygonIllustration,
  Ellipse: EllipseIllustration,
  Rectangle: RectangleIllustration,
  Controller: ControllerIllustration,
};

export const LOGOS: LogoTypes = { PS5: PS5Logo };
