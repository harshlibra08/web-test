import { Paper, Grid, Text, Image, UnstyledButton } from "@mantine/core";
import React from "react";
import WHO from "../Assets/who.png";
import RectangleOmega from "../Assets/RectangleOmega.png";
import RectangleOmegaMob from "../Assets/RectangleOmegaMob.png";

type Props = {};

const WhoAreWe = (props: Props) => {
	return (
		<>
			<Grid justify="flex-start" bg={"#000"} visibleFrom="md">
				<Grid.Col span={6}>
					<Text fz={14} fw={600} ml={114} mt={191} c={"#E4E8ED"}>
						WHO ARE WE ?
					</Text>
					<Text fz={32} w={562} fw={600} ml={114} mt={16} c={"#E4E8ED"}>
						How it all began: The Omega <br />
						moment
					</Text>
					<Text fz={16} fw={400} w={562} ml={118} mt={16} c={"#E4E8ED"}>
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

			{/**Mobile view */}
			<Grid justify="flex-start" bg={"#000"} hiddenFrom="xs" pb={56} maw={360}>
				<Grid.Col span={12}>
					<Image src={WHO} w={327} h={241} pos={"absolute"} mt={70} ml={17} />
					<Image src={RectangleOmegaMob} h={289} w={258} ml={102} mt={46} />
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
					<UnstyledButton ml={16} mt={32}>
						<Text fz={20} fw={400} c={"#f6f6f6"} ff={"Fjalla One"}>
							About Libratherm
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid>

			{/**Tablet view */}
			<Grid justify="flex-start" bg={"#000"} hiddenFrom="md" visibleFrom="xs" pb={56} w={768}>
				<Grid.Col span={12}>
					<Image src={WHO} w={550} h={441} pos={"absolute"} mt={30} ml={90} />
					<Image src={RectangleOmegaMob} h={506} w={511} ml={235} />
				</Grid.Col>
				<Grid.Col span={12}>
					<Text fz={14} fw={600} ml={90} mt={36} c={"#E4E8ED"}>
						WHO ARE WE ?
					</Text>
					<Text fz={32} fw={600} ml={90} mt={8} c={"#f6f6f6"}>
						How it all began: <br />
						The Omega moment
					</Text>
					<Text fz={12} fw={400} w={588} ml={90} mt={16} c={"#E4E8ED"}>
						Launching a business isn't easy, which is why having a co-founder can often make things
						a little smoother, especially if that co-founder is your best friend. While many
						professionals warn against choosing a close friend as your business partner, there are
						plenty of examples that prove it can work. The best example is of Airbnb..
					</Text>
					<UnstyledButton ml={90} mt={32}>
						<Text fz={24} fw={400} c={"#f6f6f6"} ff={"Fjalla One"}>
							About Libratherm
						</Text>
					</UnstyledButton>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default WhoAreWe;
