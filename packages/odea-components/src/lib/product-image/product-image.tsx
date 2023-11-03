import Style from './product-image.styled';

export function ProductImage({width, showBorder = false, onClick}: { width?: number, showBorder?: boolean; onClick?: () => void }) {
  return <Style.Container width={width} showBorder={showBorder} onClick={onClick}/>
}

