require 'feedjira'
require 'httparty'
require 'jekyll'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      if site.config['external_sources'] != nil
        site.config['external_sources'].each do |src|
          rss_value = src['rss_url']
          rss_url = if rss_value.is_a?(Array)
            rss_value.find { |v| v.is_a?(String) && !v.strip.empty? }
          else
            rss_value.to_s.strip
          end

          unless rss_url && !rss_url.empty?
            p "Skipping external source '#{src['name']}' because no rss_url is configured."
            next
          end

          p "Fetching external posts from #{src['name']}:"

          begin
            xml = HTTParty.get(rss_url).body
          rescue StandardError => e
            p "...failed to fetch #{rss_url}: #{e.message}"
            next
          end
          feed = Feedjira.parse(xml)
          feed.entries.each do |e|
            p "...fetching #{e.url}"
            slug = e.title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
            path = site.in_source_dir("_posts/#{slug}.md")
            doc = Jekyll::Document.new(
              path, { :site => site, :collection => site.collections['posts'] }
            )
            doc.data['external_source'] = src['name'];
            doc.data['feed_content'] = e.content;
            doc.data['title'] = "#{e.title}";
            doc.data['description'] = e.summary;
            doc.data['date'] = e.published;
            doc.data['redirect'] = e.url;
            site.collections['posts'].docs << doc
          end
        end
      end
    end
  end

end
