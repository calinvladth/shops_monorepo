import Style from './shop-filters-options.styled'
import {Button} from "../button/button";

function ShopFiltersOptions({show}: { show: boolean }) {

  if (show) {
    return <Style.Container>
      <Style.ContainerFilters>
        <Style.Select>
          <Style.Option>1</Style.Option>
          <Style.Option>2</Style.Option>
          <Style.Option>3</Style.Option>
        </Style.Select>

        <Style.Select>
          <Style.Option>4</Style.Option>
          <Style.Option>5</Style.Option>
          <Style.Option>6</Style.Option>
        </Style.Select>
      </Style.ContainerFilters>
      <Style.ContainerAction>
        <Button buttonType="basic" onClick={() => alert('Search')}>Search</Button>
        <Button buttonType="cancel" onClick={() => alert('Cancel')}>Clear Filters</Button>
      </Style.ContainerAction>
    </Style.Container>
  }
}

export default ShopFiltersOptions
