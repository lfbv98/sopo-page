ssh -o StrictHostKeyChecking=no -l "root" "$ec2-18-219-111-1.us-east-2.compute.amazonaws.com"
ssh -i ".circleci/instances.pem" root@ec2-18-219-111-1.us-east-2.compute.amazonaws.com
yes