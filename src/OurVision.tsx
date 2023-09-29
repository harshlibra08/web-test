import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Vision from "./Assets/vision.png";
import RectangleGrey from "./Assets/Rectangle3683.png";
type Props = {};

const OurVision = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Container>
				<Grid gutter="lg">
					<Grid.Col span={6}>
						<Image
							src={RectangleGrey}
							alt="Vision"
							height={694}
							width={505}
							pos="absolute"
							pl={0}
							left={0}
						/>
						<Image
							src={Vision}
							alt="Vision"
							width={493}
							height={451}
							pos={"absolute"}
							left={114}
							mt={114}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							fw={600}
							mr={114}
							mt={251}
							style={{ lineHeight: "51.2px" }}
							color="#F6F6F6"
						>
							Our Vision
						</Text>
						<Text
							h={110}
							w={596}
							color="#E4E8ED"
							size="md"
							fw={400}
							mb={40}
							mr={114}
							mt={24}
							style={{ lineHeight: "24px" }}
						>
							Libratherm will always thrive to be one of the best companies manufacturing the most
							rugged and reliable Electronic Process Control Instruments, using the latest available
							and accessible technology for the long lasting and trouble-free field performance.
							While designing and manufacturing our products, we will sustain the way in which our
							services benefit the customers.
						</Text>
					</Grid.Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurVision;
