import { Paper, Group, Box, Divider, Card, Text, Image, Grid } from "@mantine/core";
import { IconCircleChevronLeft, IconCircleChevronRight } from "@tabler/icons-react";
import React from "react";
import Strength1 from "../Assets/strength1.png";
import Strength2 from "../Assets/strength2.png";
import Strength3 from "../Assets/strength3.png";

type Props = {};

const OurStrengths = (props: Props) => {
	return (
		<Paper w={1440} bg={"#000"} h={952}>
			<Group wrap="nowrap" gap={0}>
				<Box w={1270}>
					<Divider
						size="sm"
						my={"60px"}
						mr={"17px"}
						label={
							<Text fw={600} fz={32} ml={114} style={{ color: "#F6F6F6", lineHeight: "40px" }}>
								Our Strengths
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{<IconCircleChevronLeft width={37} height={37} stroke={1} color="#FFF" />}
				{<IconCircleChevronRight width={37} height={37} stroke={1} color="#FFF" />}
			</Group>
			{/* <Group wrap="nowrap" justify="center"> */}
			<Grid px={114} justify="center" align="flex-start">
				<Grid.Col span={4}>
					<Card w={329} h={417} bg={"#000"}>
						<Card.Section>
							<Image src={Strength1} w={329} h={417} style={{ opacity: 0.5 }} />
						</Card.Section>
					</Card>
					<Text
						fz={32}
						ml={-50}
						mt={-100}
						w={249}
						fw={600}
						style={{ color: "#f6f6f6" }}
						pos={"absolute"}
					>
						Latest Technology
					</Text>
					<Text mt={14} w={288} ml={-50} fz={14} fw={400} style={{ color: "#f6f6f6" }}>
						We use the latest available and accessible technology for long lasting and trouble-free
						field performance.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Card w={329} h={417} bg={"#000"}>
						<Card.Section>
							<Image src={Strength2} w={329} h={417} style={{ opacity: 0.5 }} />
						</Card.Section>
					</Card>
					<Text
						fz={32}
						ml={-50}
						mt={-100}
						w={249}
						fw={600}
						style={{ color: "#f6f6f6" }}
						pos={"absolute"}
					>
						Global Standards
					</Text>
					<Text mt={14} w={288} ml={-50} fz={14} fw={400} style={{ color: "#f6f6f6" }}>
						We use the latest available and accessible technology for long lasting and trouble-free
						field performance.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Card w={329} h={417} bg={"#000"}>
						<Card.Section>
							<Image src={Strength3} w={329} h={417} style={{ opacity: 0.5 }} />
						</Card.Section>
					</Card>
					<Text
						fz={32}
						ml={-50}
						mt={-100}
						w={249}
						fw={600}
						style={{ color: "#f6f6f6" }}
						pos={"absolute"}
					>
						Client Centered Approach{" "}
					</Text>
					<Text mt={14} w={288} ml={-50} fz={14} fw={400} style={{ color: "#f6f6f6" }}>
						We use the latest available and accessible technology for long lasting and trouble-free
						field performance.
					</Text>
				</Grid.Col>
			</Grid>
			{/* </Group> */}
		</Paper>
	);
};

export default OurStrengths;
