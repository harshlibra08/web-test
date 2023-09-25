import { Paper, Container, Grid, Col, Text, Image } from "@mantine/core";
import React from "react";
import Specialization from "./Assets/specialization.png";
import RectangleGrey from "./Assets/Rectangle3683.png";
type Props = {};

const OurSpecialization = (props: Props) => {
	return (
		<Paper w={1440} h={696} withBorder bg={"black"}>
			<Container>
				<Grid gutter="lg">
					<Col span={6}>
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
							src={Specialization}
							alt="Vision"
							width={493}
							height={451}
							pos={"absolute"}
							left={114}
							mt={114}
						/>
					</Col>
					<Col span={6}>
						<Text
							size="32px"
							w={596}
							h={44}
							weight={600}
							mr={114}
							mt={241}
							style={{ lineHeight: "51.2px" }}
							color="#F6F6F6"
						>
							Our Specialisation
						</Text>
						<Text h={176} w={696} color="#E4E8ED" size={16} weight={400} mb={40} left={730} mt={24}>
							We are specialized Temperature/Process Indicators, Large Display Temperature/Process
							Indicators, Digital Portable Thermometer & Hygro-Thermometer, Temperature/Process
							Controllers, PID Temperature/Process Controllers, Ramp/Soak Programmable
							Temperature/Processs Controllers
							<br />
							<br />
							Multizone PID Ramp/Soak Programmable Temperature Controllers, Temperature/Process
							Scanners, Temperature/Process Data Loggers, Data Acquisition Software, Temperature &
							Humidity (T+Rh) Sensors & Transmitters.
						</Text>
					</Col>
				</Grid>
			</Container>
		</Paper>
	);
};

export default OurSpecialization;
