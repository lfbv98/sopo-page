sudo apt update
sudo apt install openssh-server
ssh -i ".circleci/instances.pem" root@ec2-18-219-111-1.us-east-2.compute.amazonaws.com