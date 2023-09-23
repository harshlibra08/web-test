import { Paper, Group, Box, Divider, Card, Text, Image, Button } from "@mantine/core";
import React from "react";
const TertiaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",

				fontWeight: 700,
				lineHeight: "22.4px",
				fontSize: "12px",

				"&:hover": {
					backgroundColor: "#FFFFFF", // Override hover background color to match default state
				},
			},
			label: {
				color: "#555459",
				textTransform: "uppercase",
			},
		}}
		{...props}
	/>
);
type Props = {};

const Products = (props: Props) => {
	return (
		<Paper w={1500} withBorder>
			<Group noWrap spacing={0}>
				<Box w="100%">
					<Divider
						size="md"
						my={"60px"}
						label={
							<Text size={"32px"} ml={140}>
								Our Products
							</Text>
						}
						labelPosition="left"
					/>
				</Box>
				<TertiaryButton>View All</TertiaryButton>
			</Group>

			<Group position="center" spacing="lg">
				<Card withBorder radius={8} h={364} w={288}>
					<Card.Section>
						<Text mt="xs" color="#555459" size="sm" weight={600} ml={18} mr={10}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image
							src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
							height={207}
							width={207}
							pt={15}
							ml={41}
						/>
					</Card.Section>

					<Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
						₹12,600 – ₹14,700
					</Text>
				</Card>

				<Card withBorder radius={8} h={364} w={288}>
					<Card.Section>
						<Text mt="xs" color="#555459" size="sm" weight={600} ml={18} mr={10}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image
							src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/pow-3-pa-cl-50a-2@2x.png"
							height={180}
							width={140}
							pt={35}
							ml={70}
						/>
					</Card.Section>

					<Text weight={400} size="20px" mt="lg" color="#414141" ml={40}>
						₹12,600 – ₹14,700
					</Text>
				</Card>

				<Card withBorder radius={8} h={364} w={288}>
					<Card.Section>
						<Text mt="xs" color="#555459" size="sm" weight={600} ml={18} mr={10}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image
							src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-277-1@2x.png"
							height={207}
							width={207}
							pt={15}
							ml={41}
						/>
					</Card.Section>

					<Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
						₹12,600 – ₹14,700
					</Text>
				</Card>

				<Card withBorder radius={8} h={364} w={288}>
					<Card.Section>
						<Text mt="xs" color="#555459" size="sm" weight={600} ml={18} mr={10}>
							Three Phase Thyristor Power Controller – POW-3-PA
						</Text>
						<Image
							src="https://generation-sessions.s3.amazonaws.com/ec9bdc3f6e5f9cc40d9e2683bb9c9447/img/image-273-3@2x.png"
							height={207}
							width={207}
							pt={15}
							ml={41}
						/>
					</Card.Section>

					<Text weight={400} size="20px" mt="md" color="#414141" ml={40}>
						₹12,600 – ₹14,700
					</Text>
				</Card>
			</Group>
		</Paper>
	);
};

export default Products;
