sudo ssh -i ".circleci/instances.pem" -o StrictHostKeyChecking=no "ec2-18-219-111-1.us-east-2.compute.amazonaws.com"
sudo ssh -i ".circleci/instances.pem" ubuntu@ec2-18-219-111-1.us-east-2.compute.amazonaws.com 'bash -s' < .circleci/execute-dev-ec2.sh
ls