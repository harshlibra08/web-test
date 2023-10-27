import { Grid, Text, Image, Container, Paper } from "@mantine/core";
import React from "react";
import Worldmap from "../Assets/WorldMap.png";
// import classes from "./World.module.css";
type Props = {};

const World = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={485} visibleFrom="md">
				<Grid ml={114}>
					<Grid.Col span={5}>
						<Text fz={32} fw={600} mt={205} ml={114}>
							The Global Impacts
						</Text>
						<Text fz={16} fw={600} ml={114} h={44} mt={16} w={298} c={"#555459"}>
							The products we’ve manufactured have been used over
						</Text>
						<Text fz={56} fw={700} ml={154} c={"#555459"} w={306} mt={4}>
							100 million
						</Text>

						<Text fz={16} fw={600} ml={154} c={"#555459"}>
							users & has been exported
						</Text>

						<Text fz={56} fw={700} ml={194} c={"#555459"}>
							8 countries
						</Text>

						<Text fz={16} fw={600} ml={194} w={81} c={"#555459"}>
							worldwide
						</Text>
					</Grid.Col>
					<Grid.Col span={7}>
						<Image src={Worldmap} w={698} h={457} mt={135} alt="World" />
					</Grid.Col>
				</Grid>
			</Paper>

			{/**MOBILE VIEW */}
			<Paper w={360} h={485} hiddenFrom="xs">
				<Grid>
					<Grid.Col span={12}>
						<Image src={Worldmap} w={299} h={195} mt={32} ml={31} alt="World" />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} fw={600} mt={24} ml={16}>
							The Global Impact
						</Text>
						<Text fz={12} fw={600} ml={21} h={44} mt={16} w={242} c={"#555459"}>
							The products we’ve manufactured have been used over
						</Text>
						<Text fz={32} fw={700} ml={39} c={"#555459"} w={175} mt={4}>
							100 million
						</Text>

						<Text fz={12} fw={600} ml={39} c={"#555459"}>
							users & has been exported
						</Text>

						<Text fz={32} fw={700} ml={85} mt={4} c={"#555459"}>
							8 countries
						</Text>

						<Text fz={12} fw={600} ml={85} w={81} c={"#555459"}>
							worldwide
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**TABLET VIEW */}
			<Paper w={768} h={420} hiddenFrom="md" visibleFrom="xs">
				<Grid ml={60}>
					<Grid.Col span={4}>
						<Text fz={18} w={280} fw={600} mt={100} c={"#292929"}>
							The Global Impacts
						</Text>
						<Text fz={10} fw={600} h={44} mt={16} w={195} c={"#555459"}>
							The products we’ve manufactured have been used over
						</Text>
						<Text fz={32} ml={20} fw={700} c={"#555459"} w={306} mt={4}>
							100 million
						</Text>

						<Text fz={10} ml={10} fw={600} c={"#555459"}>
							users & has been exported
						</Text>

						<Text fz={32} ml={30} fw={700} c={"#555459"}>
							8 countries
						</Text>

						<Text fz={10} ml={30} fw={600} w={81} c={"#555459"}>
							worldwide
						</Text>
					</Grid.Col>
					<Grid.Col span={8}>
						<Image src={Worldmap} ml={20} w={400} h={300} mt={55} alt="World" />
					</Grid.Col>
				</Grid>
			</Paper>
		</>
	);
};

export default World;
