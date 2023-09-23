import { Paper, Container, Grid, Col, Text, Image } from "@mantine/core";
import React from "react";
import WHO from "./Assets/who.png";
import RectangleOmega from "./Assets/RectangleOmega.png";

type Props = {};

const WhoAreWe = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Container>
				<Grid gutter="lg">
					<Col span={6}>
						<Text size={14} weight={600} color="#E4E8ED" pt={191} ml={-100}>
							WHO ARE WE?
						</Text>
						<Text
							size="32px"
							w={558}
							h={102}
							weight={600}
							pt={16}
							style={{ lineHeight: "51.2px" }}
							color="#F6F6F6"
							ml={-100}
						>
							How it all began: The Omega <br />
							moment
						</Text>
						<Text
							h={110}
							w={500}
							color="#E4E8ED"
							size={14}
							weight={400}
							pt={36}
							mb={40}
							ml={-100}
							style={{ lineHeight: "22.4px" }}
						>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
					</Col>
					<Col span={6}>
						<Image
							src={RectangleOmega}
							bg={"black"}
							width={509}
							height={696}
							pos={"absolute"}
							left={931}
							pr={0}
							mt={0}
						/>

						<Image
							src={WHO}
							alt="Sample"
							width={493}
							height={451}
							pos={"absolute"}
							mt={126}
							ml={114}
						/>
					</Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default WhoAreWe;
