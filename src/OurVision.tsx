import { Paper, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Vision from "./Assets/vision.png";
import RectangleGrey from "./Assets/Rectangle3683.png";
type Props = {};

const OurVision = (props: Props) => {
	return (
		<Paper w={1440} h={679} bg={"#000"} visibleFrom="xs">
			<Grid gutter="sm">
				<Grid.Col span={6}>
					<Image src={RectangleGrey} w={505} h={679} />
					<Image pos={"absolute"} src={Vision} w={493} h={451} ml={123} mt={-573} />
				</Grid.Col>
				<Grid.Col span={6}>
					<Text fz={32} w={562} fw={600} ml={104} mt={251} style={{ color: "#E4E8ED" }}>
						Our Vision
					</Text>
					<Text fz={16} fw={400} w={562} ml={104} mt={24} style={{ color: "#E4E8ED" }}>
						Libratherm will always thrive to be one of the best companies manufacturing the most
						rugged and reliable Electronic Process Control Instruments, using the latest available
						and accessible technology for the long lasting and trouble-free field performance. While
						designing and manufacturing our products, we will sustain the way in which our services
						benefit the customers.
					</Text>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default OurVision;
