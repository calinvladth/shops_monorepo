import Style from "./descriptions.styled";

export function Description() {
  return <Style.Container>
    <Style.ContainerImage/>
    <Style.ContainerDetails>
      <div>
        <Style.Title>
          OUR STORY
        </Style.Title>
        <Style.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis, dignissimos doloribus
          facere fugit hic laudantium libero nihil possimus quae tempora totam vitae voluptates! Aspernatur
          dolorem error esse explicabo facilis inventore itaque magnam mollitia nobis omnis porro possimus
          praesentium qui quidem repellat rerum, sit voluptates.
        </Style.Text>
      </div>
    </Style.ContainerDetails>
  </Style.Container>
}

