import { Paper, Container, Grid, Col, Text, Image } from "@mantine/core";
import React from "react";
import Worldmap from "./Assets/WorldMap.png";

type Props = {};

const World = (props: Props) => {
	return (
		<Paper w={1440} h={748} withBorder>
			<Container>
				<Grid gutter="lg">
					<Col span={6}>
						<Paper>
							<Text
								size="32px"
								//w={558}
								h={102}
								color="#292929"
								weight={600}
								pt={205}
								pb={16}
								style={{ lineHeight: "51.2px" }}
							>
								The Global Impact
							</Text>
							<Text
								h={44}
								w={298}
								color="#555459"
								size={16}
								weight={600}
								pt={45}
								mb={40}
								style={{ lineHeight: "22.4px" }}
							>
								The products we’ve manufactured have been used over
							</Text>
							<Text
								size="56px"
								//w={558}
								h={76}
								color="#555459"
								weight={600}
								pt={4}
								pl={40}
							>
								100 million
							</Text>

							<Text w={298} color="#555459" size={16} weight={600} pt={4} pl={40}>
								users & has been exported
							</Text>

							<Text
								size="56px"
								h={76}
								color="#555459"
								weight={600}
								pt={4}
								pl={80}
								//mr={60}
							>
								8 countries
							</Text>

							<Text
								h={44}
								//w={298}
								color="#555459"
								size={16}
								weight={600}
								mb={40}
								pl={80}
							>
								worldwide
							</Text>
						</Paper>
					</Col>
					<Col span={6}>
						<Paper w={698} h={457} mr={141} mt={135}>
							<Image src={Worldmap} alt="World" />
						</Paper>
					</Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default World;
