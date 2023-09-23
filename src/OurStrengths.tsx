import { Paper, Group, Box, Divider, Card, Text, Image } from "@mantine/core";
import { IconCircleChevronLeft, IconCircleChevronRight } from "@tabler/icons-react";
import React from "react";
import Strength1 from "./Assets/strength1.png";
import Strength2 from "./Assets/strength2.png";
import Strength3 from "./Assets/strength3.png";
import Gradient from "./Assets/gradient1.png";

type Props = {};

const OurStrengths = (props: Props) => {
	return (
		<Paper w={1440} h={964} withBorder>
			<Group noWrap spacing={0}>
				<Box w="100%">
					<Divider
						size="md"
						my={"60px"}
						mr={"157px"}
						label={
							<Text size={"32px"} ml={140}>
								Our Strengths
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{<IconCircleChevronLeft width={37} height={37} stroke={1} />}
				{<IconCircleChevronRight width={37} height={37} stroke={1} />}
			</Group>

			<Group position="center" spacing="lg">
				<Card h={700} w={391}>
					<Card.Section>
						<Box pos="relative" w={391} h={450}>
							<Image
								src={Strength1}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
							<Image
								src={Gradient}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
							<Text weight={600} h={92} w={347} size={40} pos="absolute" top={283} color="#FFFFFF">
								Latest Technology
							</Text>

							<Text
								size="14px"
								weight={600}
								w={288}
								h={57}
								pt={29}
								pos="absolute"
								top={404}
								color="#000000"
							>
								We use the latest available and accessible technology for long lasting and
								trouble-free field performance.
							</Text>
						</Box>
					</Card.Section>
				</Card>

				<Card h={700} w={391}>
					<Card.Section>
						<Box pos="relative" w={391} h={450}>
							<Image
								src={Strength2}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
							<Image
								src={Gradient}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
						</Box>
						<Text weight={600} h={92} w={249} size={40} pos="absolute" top={283} color="#FFFFFF">
							Global Standards
						</Text>

						<Text
							size="14px"
							weight={600}
							w={288}
							h={57}
							pt={29}
							pos="absolute"
							top={404}
							color="#000000"
						>
							Our products are performing in nearly all the states in the country and in more than
							25 countries around the world
						</Text>
					</Card.Section>
				</Card>

				<Card h={700} w={391}>
					<Card.Section>
						<Box pos="relative" w={391} h={450}>
							<Image
								src={Strength3}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
							<Image
								src={Gradient}
								height={417}
								width={329}
								alt="Client"
								pos="absolute"
								top={0}
								left={0}
								w="100%"
								h="100%"
							/>
						</Box>
						<Text weight={600} h={92} w={347} size={40} pos="absolute" top={283} color="#FFFFFF">
							Client Centered Approach
						</Text>

						<Text
							size="14px"
							weight={600}
							w={288}
							h={57}
							pt={29}
							pos="absolute"
							top={404}
							color="#000000"
						>
							While designing and manufacturing our products, we sustain a way in which our services
							benefit the customers.
						</Text>
					</Card.Section>
				</Card>
			</Group>
		</Paper>
	);
};

export default OurStrengths;
