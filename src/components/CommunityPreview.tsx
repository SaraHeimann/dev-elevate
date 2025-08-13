import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Star, 
  ArrowRight,
  TrendingUp,
  Code,
  Briefcase
} from "lucide-react";

const CommunityPreview = () => {
  const communities = [
    {
      name: "Frontend Developers",
      members: 1247,
      description: "React, Vue, Angular discussions and project collaborations",
      category: "Technical",
      trending: true,
      color: "bg-blue-500"
    },
    {
      name: "Job Hunt Support",
      members: 892,
      description: "Share experiences, tips, and moral support for job searching",
      category: "Career",
      trending: false,
      color: "bg-green-500"
    },
    {
      name: "AI & Machine Learning",
      members: 634,
      description: "Discuss ML projects, share resources, and collaborate",
      category: "Technical",
      trending: true,
      color: "bg-purple-500"
    }
  ];

  const recentPosts = [
    {
      author: "Sarah Chen",
      avatar: "SC",
      content: "Just landed my first frontend role! Here's what helped me the most during my job search...",
      community: "Job Hunt Support",
      likes: 23,
      comments: 8,
      timeAgo: "2h ago"
    },
    {
      author: "Mike Rodriguez",
      avatar: "MR", 
      content: "Working on a React project and need collaborators. Who's interested in building a task management app?",
      community: "Frontend Developers",
      likes: 15,
      comments: 12,
      timeAgo: "4h ago"
    },
    {
      author: "Emma Thompson",
      avatar: "ET",
      content: "Created a comprehensive guide for ML interview questions. Check it out and let me know your thoughts!",
      community: "AI & Machine Learning",
      likes: 31,
      comments: 7,
      timeAgo: "6h ago"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-4">
            Join Our <span className="text-gradient">Growing Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together in supportive communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Popular Communities */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading text-2xl font-semibold">Popular Communities</h3>
              <Button variant="outline" className="hover:bg-primary hover:text-white transition-smooth">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {communities.map((community) => (
                <Card key={community.name} className="border-0 shadow-soft hover:shadow-medium transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${community.color} rounded-xl flex items-center justify-center`}>
                          {community.category === "Technical" ? (
                            <Code className="h-6 w-6 text-white" />
                          ) : (
                            <Briefcase className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                              {community.name}
                            </h4>
                            {community.trending && (
                              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {community.members.toLocaleString()} members
                            </span>
                            <Badge variant="outline">{community.category}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{community.description}</p>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary text-white hover:shadow-medium transition-smooth"
                    >
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading text-2xl font-semibold">Recent Posts</h3>
              <Button variant="outline" className="hover:bg-primary hover:text-white transition-smooth">
                See More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" alt={post.author} />
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{post.author}</span>
                          <span className="text-sm text-muted-foreground">in</span>
                          <Badge variant="outline" className="text-xs">
                            {post.community}
                          </Badge>
                          <span className="text-sm text-muted-foreground ml-auto">
                            {post.timeAgo}
                          </span>
                        </div>
                        <p className="text-foreground mb-4 leading-relaxed">
                          {post.content}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                            <Star className="h-4 w-4" />
                            {post.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-soft bg-gradient-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Ready to Connect?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers already accelerating their careers through community
              </p>
              <Button className="btn-hero">
                Explore Communities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityPreview;