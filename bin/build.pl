#!/usr/bin/perl
use FindBin qw($Bin);
use lib "$Bin/../lib";
use Path::Class qw(dir);
use File::Path qw(make_path remove_tree);
use File::Copy;
use File::Find;
use File::stat;
use File::Basename;
use Getopt::Std;

## Settings for this project
my $pandoc = '/usr/local/bin/pandoc';

# Get absolute path to directory with this script in it
my $dir = dir($Bin);
# Our 'base path' is one level higher... use Path::Class for this
my $basepath = $dir->parent;

$content_path = $basepath . "/content";
$html_path    = $basepath . "/web";
$slide_path   = $basepath . "/presentation";
$src_path     = $basepath . "/assets";
$pack_path    = $basepath . "/zombie-rucksack";
$ex_path      = $basepath . "/exercises";

## Generate outline in slidy and html form
## more later...

$src_file = $content_path . "/outline.mdown";
$output   = $slide_path   . "/outline.html";
$flags    = '--from=markdown --to=slidy --standalone';
system("$pandoc $flags --css=../assets/styles/workshop.css $src_file > $output");


sub build_presentation {
  if ($_ =~ /\.content/ && $File::Find::name !~ /field-notes/ ) {
    ($base, $dir, $ext) = fileparse($File::Find::name, '\..*'); # Split path into dir, file basename, extension
    my $pageid      = $base; # The page ID
    my $output_path = $slide_path . '/' . $base . '.html';
    system("$pandoc $flags --section-divs --css=../assets/styles/workshop.css $_ > $output_path");
  }
}

sub build_survival {
  ($base, $dir, $ext) = fileparse($File::Find::name, '\..*'); # Split path into dir, file basename, extension
  my $output          = $pack_path . "/survival-tools/" . $base . ".html";
  my $css             = "fieldnotes.css";
  my $flags           = "--from=markdown --to=html --html5 --section-divs --standalone";
  system("$pandoc $flags --css=$css $_ > $output"); 
}

my @dirlist = $content_path;
find(\&build_presentation, @dirlist);

# Build field notes and other rucksack items
my @survival_items = ($content_path . "/field-notes.content",
                      $ex_path . "/03-release-hounds/01-going-fluid/fluid-css-changes.content",
                      $ex_path . "/03-release-hounds/02-media-queries/sigma-media-query.content");
find(\&build_survival, @survival_items);