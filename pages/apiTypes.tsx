interface SocialMediaRegistration {
  name: string;
  domain: string;
  method: string;
  frequent_rate_limit: boolean;
  rateLimit: boolean;
  exists: boolean;
  emailrecovery?: any;
  phoneNumber?: any;
  others?: any;
}
  
interface EmailReputationDetails {
  blacklisted: boolean;
  malicious_activity: boolean;
  malicious_activity_recent: boolean;
  credentials_leaked: boolean;
  credentials_leaked_recent: boolean;
  data_breach: boolean;
  first_seen: string;
  last_seen: string;
  domain_exists: boolean;
  domain_reputation: string;
  new_domain: boolean;
  days_since_domain_creation: number;
  suspicious_tld: boolean;
  spam: boolean;
  free_provider: boolean;
  disposable: boolean;
  deliverable: boolean;
  accept_all: boolean;
  valid_mx: boolean;
  primary_mx: string;
  spoofable: boolean;
  spf_strict: boolean;
  dmarc_enforced: boolean;
  profiles: string[];
}
  
  interface BasicEmailReputation {
    email: string;
    reputation: string;
    suspicious: boolean;
    references: number;
    details: EmailReputationDetails;
    summary: string;
  }

  interface LeakDetails {
    sources?: string[];
    email_only?: boolean;
    line?: string;
    last_breach?: string;
  }

  interface Leaks {
    [key: string]: LeakDetails;
  }
  
interface ApiResponse {
  email: string;
  basic_email_reputation: BasicEmailReputation;
  leaks: Leaks;
  social_media_registrations: SocialMediaRegistration[];
  created_at: string;
  updated_at: string;
}
  