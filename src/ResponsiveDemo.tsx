import { Badge, Button, Card, Grid, Group, useMantineTheme, Text, Image } from "@mantine/core";
import React from "react";
import Panel from "../src/Assets/panel.png";

type Props = {};

const ResponsiveDemo = (props: Props) => {
	const theme = useMantineTheme();
	return (
		<Grid justify="space-around">
			<Grid.Col style={{ maxWidth: 350 }} visibleFrom="xs">
				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Card.Section>
						<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={137} h={173} ml={75} mt={33} />
					</Card.Section>

					<Text px={59} c={"#414141"} mt={30}>
						₹12,600 – ₹14,700
					</Text>
				</Card>
			</Grid.Col>
			<Grid.Col style={{ maxWidth: 350 }} visibleFrom="xs">
				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Card.Section>
						<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={137} h={173} ml={75} mt={33} />
					</Card.Section>

					<Text px={59} c={"#414141"} mt={30}>
						₹12,600 – ₹14,700
					</Text>
				</Card>
			</Grid.Col>
			<Grid.Col style={{ maxWidth: 350 }} visibleFrom="xs">
				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Card.Section>
						<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={137} h={173} ml={75} mt={33} />
					</Card.Section>

					<Text px={59} c={"#414141"} mt={30}>
						₹12,600 – ₹14,700
					</Text>
				</Card>
			</Grid.Col>
			<Grid.Col style={{ maxWidth: 350 }} visibleFrom="xs">
				<Card shadow="sm" padding="lg" radius="md" withBorder>
					<Card.Section>
						<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image src={Panel} w={137} h={173} ml={75} mt={33} />
					</Card.Section>

					<Text px={59} c={"#414141"} mt={30}>
						₹12,600 – ₹14,700
					</Text>
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export default ResponsiveDemo;
