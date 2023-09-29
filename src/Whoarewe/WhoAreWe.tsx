import { Paper, Grid, Text, Image, UnstyledButton } from "@mantine/core";
import React from "react";
import WHO from "../Assets/who.png";
import RectangleOmega from "../Assets/RectangleOmega.png";

type Props = {};

const WhoAreWe = (props: Props) => {
	return (
		<Paper w={1440} bg={"#000"} h={696} mt={97}>
			<Grid gutter="sm">
				<Grid.Col span={6}>
					<Text fz={14} fw={600} ml={114} mt={191} style={{ color: "#E4E8ED" }}>
						WHO ARE WE ?
					</Text>
					<Text fz={32} w={562} fw={600} ml={114} mt={16} style={{ color: "#E4E8ED" }}>
						How it all began: The Omega <br />
						moment
					</Text>
					<Text fz={16} fw={400} w={562} ml={118} mt={16} style={{ color: "#E4E8ED" }}>
						Launching a business isn't easy, which is why having a co-founder can often make things
						a little smoother, especially if that co-founder is your best friend. While many
						professionals warn against choosing a close friend as your business partner, there are
						plenty of examples that prove it can work. The best example is of Airbnb..
					</Text>
					<UnstyledButton ml={118} mt={40}>
						<Text fz={20} fw={400} style={{ color: "#F6F6F6" }}>
							About Libratherm
						</Text>
					</UnstyledButton>
				</Grid.Col>
				<Grid.Col span={6}>
					<Image src={RectangleOmega} h={696} ml={209} />
					<Image pos={"absolute"} src={WHO} w={493} h={451} ml={123} mt={-573} />
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default WhoAreWe;
