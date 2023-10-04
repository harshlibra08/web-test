import { Grid, Text, Image, Container, Paper } from "@mantine/core";
import React from "react";
import Worldmap from "../Assets/WorldMap.png";
// import classes from "./World.module.css";
type Props = {};

const World = (props: Props) => {
	return (
		<Paper w={1440} h={696}>
			<Grid>
				<Grid.Col span={4}>
					<Text fz={32} fw={600} mt={205} ml={114} w={280}>
						The Global Impact
					</Text>
					<Text fz={16} fw={600} ml={114} h={44} mt={16} w={298} style={{ color: "#555459" }}>
						The products we’ve manufactured have been used over
					</Text>
					<Text fz={56} fw={700} ml={154} style={{ color: "#555459" }} w={306} mt={4}>
						100 million
					</Text>

					<Text fz={16} fw={600} ml={154} w={207} style={{ color: "#555459" }}>
						users & has been exported
					</Text>

					<Text fz={56} fw={700} ml={194} w={312} style={{ color: "#555459" }}>
						8 countries
					</Text>

					<Text fz={16} fw={600} ml={194} w={81} style={{ color: "#555459" }}>
						worldwide
					</Text>
				</Grid.Col>
				<Grid.Col span={8}>
					<Image src={Worldmap} w={698} h={457} mt={135} ml={95} alt="World" />
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default World;
