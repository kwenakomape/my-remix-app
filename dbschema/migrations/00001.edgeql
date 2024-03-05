CREATE MIGRATION m1tkkowiyv4wcstzl3npov2jsq3c2ubtlujs4eeuxzxht7dmkledqa
    ONTO initial
{
  CREATE TYPE default::SchoolDetails {
      CREATE REQUIRED PROPERTY schoolAddress: std::str;
      CREATE REQUIRED PROPERTY schoolName: std::str;
  };
};
