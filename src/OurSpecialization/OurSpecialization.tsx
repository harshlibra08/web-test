import { Paper, Container, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Specialization from "../Assets/specialization.png";
import RectangleGrey from "../Assets/Rectangle3683.png";
import classes from "./OurSpecialization.module.css";
type Props = {};

const OurSpecialization = (props: Props) => {
	return (
		<Container className={classes.outline}>
			<Grid gutter="lg">
				<Grid.Col className={classes.grid} span={6}>
					<Image className={classes.bgimage} src={RectangleGrey} pos="absolute" left={0} />
					<Image className={classes.fgimage} src={Specialization} pos={"absolute"} />
				</Grid.Col>
				<Grid.Col span={6}>
					<Text className={classes.title}>Our Specialisation</Text>
					<Text className={classes.body}>
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
		</Container>
	);
};

export default OurSpecialization;
