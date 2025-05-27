export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      enquiries: {
        Row: {
          created_at: string
          id: string
          message: string | null
          mobile: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          mobile: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          mobile?: string
          name?: string
        }
        Relationships: []
      }
      partner_profiles: {
        Row: {
          business_type: Database["public"]["Enums"]["business_type"]
          city: string | null
          company_name: string
          created_at: string | null
          email: string | null
          id: string
          is_approved: boolean | null
          owner_name: string
          phone_number: string
          state: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          business_type: Database["public"]["Enums"]["business_type"]
          city?: string | null
          company_name: string
          created_at?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean | null
          owner_name: string
          phone_number: string
          state?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          business_type?: Database["public"]["Enums"]["business_type"]
          city?: string | null
          company_name?: string
          created_at?: string | null
          email?: string | null
          id?: string
          is_approved?: boolean | null
          owner_name?: string
          phone_number?: string
          state?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      partner_registrations: {
        Row: {
          created_at: string
          email: string | null
          id: string
          location: string
          office_name: string
          owner_name: string
          phone_number: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          location: string
          office_name: string
          owner_name: string
          phone_number: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          location?: string
          office_name?: string
          owner_name?: string
          phone_number?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          company_name: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          company_name: string
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string
          product_type: string
          quantity: string
          status: string
          updated_at: string
        }
        Insert: {
          company_name: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone: string
          product_type: string
          quantity: string
          status?: string
          updated_at?: string
        }
        Update: {
          company_name?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string
          product_type?: string
          quantity?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      seller_stocks: {
        Row: {
          business_type: string
          company_name: string
          contact_person: string
          created_at: string
          email: string
          id: string
          message: string | null
          product_category: string
          status: string
          stock_details: string
          updated_at: string
          user_id: string
          whatsapp_number: string
        }
        Insert: {
          business_type: string
          company_name: string
          contact_person: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          product_category: string
          status?: string
          stock_details: string
          updated_at?: string
          user_id: string
          whatsapp_number: string
        }
        Update: {
          business_type?: string
          company_name?: string
          contact_person?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          product_category?: string
          status?: string
          stock_details?: string
          updated_at?: string
          user_id?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      stock_entries: {
        Row: {
          color: string | null
          created_at: string | null
          height: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          length: number | null
          price_per_sq_ft: number
          product_type: string
          quantity: number | null
          seller_id: string | null
          size_info: string | null
          stock_name: string
          total_sq_feet: number
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          height?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          length?: number | null
          price_per_sq_ft: number
          product_type: string
          quantity?: number | null
          seller_id?: string | null
          size_info?: string | null
          stock_name: string
          total_sq_feet: number
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          height?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          length?: number | null
          price_per_sq_ft?: number
          product_type?: string
          quantity?: number | null
          seller_id?: string | null
          size_info?: string | null
          stock_name?: string
          total_sq_feet?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          phone_number: string | null
          updated_at: string | null
          user_role: Database["public"]["Enums"]["user_role"] | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
          updated_at?: string | null
          user_role?: Database["public"]["Enums"]["user_role"] | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
          updated_at?: string | null
          user_role?: Database["public"]["Enums"]["user_role"] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      business_type: "retailer" | "distributor" | "manufacturer"
      user_role: "normal_user" | "partner" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      business_type: ["retailer", "distributor", "manufacturer"],
      user_role: ["normal_user", "partner", "admin"],
    },
  },
} as const
