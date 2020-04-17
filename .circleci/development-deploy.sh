ssh -i ".circleci/instances.pem" -o StrictHostKeyChecking=no "ec2-18-219-111-1.us-east-2.compute.amazonaws.com"
ssh -i ".circleci/instances.pem" ubuntu@ec2-18-219-111-1.us-east-2.compute.amazonaws.com