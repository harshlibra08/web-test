import { Grid, Text, Image, Container } from "@mantine/core";
import React from "react";
import Worldmap from "../Assets/WorldMap.png";
// import classes from "./World.module.css";
type Props = {};

const World = (props: Props) => {
	return (
		// <Container
		// // className={classes.outline}
		// >
		// 	<Grid>
		// 		<Grid.Col
		// 		// className={classes.textgrid}
		// 		// span={6}
		// 		>
		// 			<Text className={classes.global}>The Global Impact</Text>
		// 			<Text className={classes.product}>
		// 				The products we’ve manufactured have been used over
		// 			</Text>
		// 			<Text className={classes.million}>100 million</Text>

		// 			<Text className={classes.users}>users & has been exported</Text>

		// 			<Text className={classes.countries}>8 countries</Text>

		// 			<Text className={classes.world}>worldwide</Text>
		// 		</Grid.Col>
		// 		<Grid.Col
		// 		// className={classes.imagegrid}
		// 		// span={6}
		// 		>
		// 			{/* <Image className={classes.worldimage} src={Worldmap} alt="World" /> */}
		// 		</Grid.Col>
		// 	</Grid>
		// </Container>
		<Grid>
			<Grid.Col span={6}>A</Grid.Col>
			<Grid.Col span={6}>B</Grid.Col>
		</Grid>
	);
};

export default World;
