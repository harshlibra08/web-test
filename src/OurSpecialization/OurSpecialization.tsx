import { Paper, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Specialization from "../Assets/specialization.png";
import RectangleGrey from "../Assets/Rectangle3683.png";
// import classes from "./OurSpecialization.module.css";
type Props = {};

const OurSpecialization = (props: Props) => {
	return (
		<Paper w={1440} h={679} bg={"#000"} mt={5}>
			<Grid gutter="sm">
				<Grid.Col span={6}>
					<Image src={RectangleGrey} w={505} h={679} />
					<Image pos={"absolute"} src={Specialization} w={493} h={451} ml={123} mt={-573} />
				</Grid.Col>
				<Grid.Col span={6}>
					<Text fz={32} w={562} fw={600} ml={104} mt={218} style={{ color: "#E4E8ED" }}>
						Our Specialization
					</Text>
					<Text fz={16} fw={400} w={562} ml={104} mt={16} style={{ color: "#E4E8ED" }}>
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
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default OurSpecialization;
