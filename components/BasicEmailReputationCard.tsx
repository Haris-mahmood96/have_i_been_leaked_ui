import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface BasicEmailReputationCardProps {
  reputation: BasicEmailReputation;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BasicEmailReputationCard: React.FC<BasicEmailReputationCardProps> = ({ reputation }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        titleTypographyProps={{ variant: 'h6' }}
        title="Basic Email Reputation"
        subheader={reputation?.email}
      />
      <CardContent>
        <Typography color="textSecondary">
          Email: {reputation?.email}
        </Typography>
        <Typography color="textSecondary">
          Reputation: {reputation.reputation}
        </Typography>
        <Typography color="textSecondary">
          Suspicious: {reputation.suspicious ? "Yes" : "No"}
        </Typography>
        <Typography color="textSecondary">
          References: {reputation.references}
        </Typography>
        <Typography color="textSecondary">
          Summary: {reputation.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography variant="subtitle1">
            More Details..
          </Typography>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="textSecondary">
            Blacklisted: {reputation.details?.blacklisted ? "Yes" : "No"}
          </Typography>
          <Typography color="textSecondary">
            Malicious Activity: {reputation.details?.malicious_activity ? "Yes" : "No"}
          </Typography>
          <Typography color="textSecondary">
            Malicious Activity Recent: {reputation.details?.malicious_activity_recent ? "Yes" : "No"}
          </Typography>
          <Typography color="textSecondary">
            Credentials Leaked: {reputation.details?.credentials_leaked ? "Yes" : "No"}
          </Typography>
          <Typography color="textSecondary">
            Credentials Leaked Recent: {reputation.details?.credentials_leaked_recent ? "Yes" : "No"}
          </Typography>
          <Typography color="textSecondary">
            Data Breach: {reputation.details?.data_breach ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            First Seen: {reputation.details?.first_seen}
          </Typography>
          <Typography color="textSecondary">
            Last Seen: {reputation.details?.last_seen}
          </Typography>
          <Typography color="textSecondary">
            Domain Exists: {reputation.details?.domain_exists ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Domain Reputation: {reputation.details?.domain_reputation}
          </Typography>
          <Typography color="textSecondary">
            New Domain: {reputation.details?.new_domain ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Days Since Domain Creation: {reputation.details?.days_since_domain_creation}
          </Typography>
          <Typography color="textSecondary">
            Suspicious Tld: {reputation.details?.suspicious_tld}
          </Typography>
          <Typography color="textSecondary">
            Spam: {reputation.details?.spam}
          </Typography>
          <Typography color="textSecondary">
            Free Provider: {reputation.details?.free_provider}
          </Typography>
          <Typography color="textSecondary">
            Disposable: {reputation.details?.disposable ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Deliverable: {reputation.details?.deliverable ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Accept All: {reputation.details?.accept_all ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Valid mx: {reputation.details?.valid_mx ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Primary mx: {reputation.details?.primary_mx}
          </Typography>
          <Typography color="textSecondary">
            Spoofable: {reputation.details?.spoofable ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Spf Strict: {reputation.details?.spf_strict ? "true" : "false"}
          </Typography>
          <Typography color="textSecondary">
            Dmarc Enforced: {reputation.details?.dmarc_enforced ? "true" : "false"}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BasicEmailReputationCard;
