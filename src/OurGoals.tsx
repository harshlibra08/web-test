import { Paper, Container, Grid, Col, SimpleGrid, Image, Text } from "@mantine/core";
import React from "react";
import Goal1 from "./Assets/goal1.png";
import Goal2 from "./Assets/goal2.png";
import Goal3 from "./Assets/goal3.png";
import Goal4 from "./Assets/goal4.png";
type Props = {};

const OurGoals = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Container>
				<Grid gutter="380px">
					<Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							weight={600}
							mt={145}
							style={{ lineHeight: "51.2px" }}
							color="#F6F6F6"
							ml={-100}
						>
							Our Goal
						</Text>
						<Text
							h={264}
							w={596}
							color="#E4E8ED"
							size={16}
							weight={400}
							mt={24}
							mb={40}
							ml={-100}
							style={{ lineHeight: "22.4px" }}
						>
							Libratherm has been catering to various industries by supplying the standard and
							customized process control instruments and systems to meet and satisfy their
							requirement.
							<br />
							<br />
							<br />
							Our products are widely used in Engineering Industries, Heat Treatment Plants, Glass
							Industries, Furnace & Oven Industries, Pharmaceutical Industries, Jewellery
							Industries, Power Generating Industries, Sponge Iron Industries, Environmental
							Chambers, Petroleum Industries, Steel Industries, Textile Industries, BOD Incubators,
							HVAC Industries, AHU Industries, APFC Industries, Packaging Industries, Automation
							Industries, Plastic Industries, Food Industries, Pollution Control Industries,
							Petrochemical Industries, Water Treatment Plants, Research and Defence Institutes.
						</Text>
					</Col>
					<SimpleGrid cols={2} pl={750} mt={-590}>
						<div style={{ marginLeft: 25 }}>
							<Image src={Goal1} height={189} width={234} />
						</div>
						<div>
							<Image src={Goal2} height={189} width={234} />
						</div>
						<div style={{ marginLeft: 25, marginTop: -190 }}>
							<Image src={Goal3} height={189} width={234} />
						</div>
						<div style={{ marginTop: -190 }}>
							<Image src={Goal4} height={189} width={234} />
						</div>
					</SimpleGrid>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurGoals;
