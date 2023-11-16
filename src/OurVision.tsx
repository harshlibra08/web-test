import { Paper, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Vision from "./Assets/vision.png";
import RectangleGrey from "./Assets/Rectangle3683.png";
type Props = {};

const OurVision = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360, lg: 1440 }} h={{ base: 555, lg: 748 }} bg={"#000"} mt={{ base: 30 }}>
				<Grid>
					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Image
							src={Vision}
							pos={"absolute"}
							left={0}
							ml={{ base: 17, lg: 114 }}
							mt={{ base: 24, lg: 114 }}
							w={{ base: 327, lg: 493 }}
							h={{ base: 241, lg: 451 }}
						/>
					</Grid.Col>

					<Grid.Col span={{ base: 12, lg: 6 }}>
						<Text
							fz={{ base: 20, lg: 32 }}
							w={374}
							fw={600}
							ml={{ base: 16 }}
							mt={{ base: 284, lg: 251 }}
							style={{ color: "#FFFFFF" }}
						>
							Our Vision
						</Text>
						<Text
							c={"#e4e8ed"}
							mt={24}
							fz={{ base: 12, lg: 16 }}
							fw={400}
							ml={{ base: 16 }}
							w={{ base: 328, lg: 596 }}
						>
							Libratherm will always thrive to be one of the best companies manufacturing the most
							rugged and reliable Electronic Process Control Instruments, using the latest available
							and accessible technology for the long lasting and trouble-free field performance.
							While designing and manufacturing our products, we will sustain the way in which our
							services benefit the customers.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**Mobile */}
			{/* <Paper w={360} h={600} bg={"#000"} hiddenFrom="xs">
				<Grid ml={16}>
					<Grid.Col span={12}>
						<Image src={Vision} w={327} h={242} mt={40} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} w={562} fw={600} mt={24} c={"#e4e8ed"}>
							Our Vision
						</Text>
						<Text fz={12} fw={400} w={328} mt={24} c={"#e4e8ed"}>
							Libratherm will always thrive to be one of the best companies manufacturing the most
							rugged and reliable Electronic Process Control Instruments, using the latest available
							and accessible technology for the long lasting and trouble-free field performance.
							While designing and manufacturing our products, we will sustain the way in which our
							services benefit the customers.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet */}
			{/* <Paper w={768} h={679} bg={"#000"} visibleFrom="xs" hiddenFrom="md">
				<Grid ml={90}>
					<Grid.Col span={12}>
						<Image src={Vision} w={588} h={355} mt={40} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} w={562} fw={600} mt={24} c={"#e4e8ed"}>
							Our Vision
						</Text>
						<Text fz={12} fw={400} w={588} mt={24} c={"#e4e8ed"}>
							Libratherm will always thrive to be one of the best companies manufacturing the most
							rugged and reliable Electronic Process Control Instruments, using the latest available
							and accessible technology for the long lasting and trouble-free field performance.
							While designing and manufacturing our products, we will sustain the way in which our
							services benefit the customers.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default OurVision;
