import { Paper, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Specialization from "../Assets/specialization.png";
import RectangleGrey from "../Assets/Rectangle3683.png";

// import classes from "./OurSpecialization.module.css";
type Props = {};

const OurSpecialization = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={679} bg={"#000"} visibleFrom="xs">
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
			<Grid justify="flex-start" bg={"#000"} hiddenFrom="xs" pb={56} maw={360}>
				<Grid.Col span={12}>
					<Image src={Specialization} w={327} h={241} pos={"absolute"} mt={70} ml={17} />
					<Image src={RectangleGrey} h={289} w={258} ml={102} mt={46} />
				</Grid.Col>
				<Grid.Col span={12}>
					<Text fz={10} fw={600} ml={17} mt={24} c={"#E4E8ED"}>
						WHO ARE WE ?
					</Text>
					<Text fz={18} w={199} fw={600} ml={17} mt={8} c={"#f6f6f6"}>
						How it all began: <br />
						The Omega moment
					</Text>
					<Text fz={12} fw={400} w={328} ml={17} mt={16} c={"#E4E8ED"}>
						Launching a business isn't easy, which is why having a co-founder can often make things
						a little smoother, especially if that co-founder is your best friend. While many
						professionals warn against choosing a close friend as your business partner, there are
						plenty of examples that prove it can work. The best example is of Airbnb..
					</Text>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default OurSpecialization;
